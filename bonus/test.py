import requests

url = 'http://127.0.0.1:4444/'
myobj = {'drive': 'park'}

x = requests.post(url, json = myobj)

print(x.text)