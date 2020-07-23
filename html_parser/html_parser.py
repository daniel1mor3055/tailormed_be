import urllib.request
from urllib.error import HTTPError

from bs4 import BeautifulSoup


class HTMLParser:
    def parse_url(self, url):
        html_page = self._get_html_page(url=url)
        if not html_page:
            return

        ul_elements = html_page.find('ul', attrs={'class': 'funds'})
        anchors_inside_ul_funds = ul_elements.find_all('a', href=True)
        foundations_program_map = dict()
        for anchor in anchors_inside_ul_funds[:2]:
            href = anchor.get('href')
            foundations_program_map[anchor.getText()] = self.get_foundation_properties(href)

        return foundations_program_map


    def get_foundation_properties(self, href):
        html_page = self._get_html_page(url=href)
        if not html_page:
            return

        row_clearfixes = html_page.find_all('div', attrs={'class': 'row'})
        relevant_options = {'Status', 'Maximum Award Level'}
        results_dict = dict()
        for clear_fix in row_clearfixes:
            foundation_properties = clear_fix.find_all('div')
            for foundation_property in foundation_properties:
                h4 = foundation_property.find('h4')
                if h4:
                    title = h4.getText().strip()
                    if title in relevant_options:
                        results_dict[title] = foundation_property.contents[2].strip()

        treatments = html_page.find('div', attrs={'class': 'treatments-covered'})
        li_list_inside_treatments = treatments.find_all('li')
        results_dict['Treatments Covered'] = [li.getText().strip() for li in li_list_inside_treatments]

        return results_dict

    @staticmethod
    def _get_html_page(url):
        try:
            page = urllib.request.urlopen(url)
        except HTTPError as e:
            print(f'{e} url={url} - skipping...')
            return
        except ConnectionError as e:
            print(f'{e} url={url} - skipping...')
            return

        html_page = BeautifulSoup(page, 'html.parser')
        return html_page
