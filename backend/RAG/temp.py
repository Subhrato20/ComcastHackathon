#!/usr/bin/env python
print('If you get error "ImportError: No module named \'six\'" install six:\n'+\
    '$ sudo pip install six');
print('To enable your free eval account and get CUSTOMER, YOURZONE and ' + \
    'YOURPASS, please contact sales@brightdata.com')
import sys
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
if sys.version_info[0]==2:
    import six
    from six.moves.urllib import request
    opener = request.build_opener(
        request.ProxyHandler(
            {'http': 'http://brd-customer-hl_8ab66c71-zone-serp_api_codefest:7wu1yt6fyb2t@brd.superproxy.io:33335',
            'https': 'http://brd-customer-hl_8ab66c71-zone-serp_api_codefest:7wu1yt6fyb2t@brd.superproxy.io:33335'}))
    print(opener.open('https://www.bing.com/search?q=pizza&cc=us&location=United+States').read())
if sys.version_info[0]==3:
    import urllib.request
    opener = urllib.request.build_opener(
        urllib.request.ProxyHandler(
            {'http': 'http://brd-customer-hl_8ab66c71-zone-serp_api_codefest:7wu1yt6fyb2t@brd.superproxy.io:33335',
            'https': 'http://brd-customer-hl_8ab66c71-zone-serp_api_codefest:7wu1yt6fyb2t@brd.superproxy.io:33335'}))
    print(opener.open('https://www.bing.com/search?q=pizza&cc=us&location=United+States&brd_json=1').read())