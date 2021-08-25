from selenium import webdriver
from selenium.webdriver import ChromeOptions, Chrome
import os, time
from PIL import Image

# Configurações 
options = webdriver.ChromeOptions()
options.headless = True # não mostra navegador
path = os.getcwd()+"\chromedriver_win.exe"
path = path.replace("/", "\\")
options.add_experimental_option("detach", True)
# options.add_argument('--start-maximized')
options.add_argument("--window-position=0, 0");
browser = webdriver.Chrome(executable_path=path, options=options)

images = []

def create_pdf(url):
    image1 = Image.open(url)
    im1 = image1.convert('RGB')
    im1.save(r'./screenshots/result.pdf')

def define_size(size):
    browser.set_window_size(size, 1080)
    height = browser.execute_script("return document.body.scrollHeight")
    browser.set_window_size(size, height)
    height = str(height)
    size = str(size)
    url = './screenshots/'+size+'x'+height+'.png'

    images.append(url)

    return url

def take_screenshot(html):

    browser.get(html)

    time.sleep(3)

    url = define_size(1920)
    browser.save_screenshot(url)
    
    url = define_size(1366)
    browser.save_screenshot(url)

    url = define_size(768)
    browser.save_screenshot(url)

    url = define_size(414)
    browser.save_screenshot(url)

    url = define_size(360)
    browser.save_screenshot(url)

    im = []
    
    for i in range(0, len(images)):
        images[i] = Image.open(images[i])
        im.append(images[i].convert('RGB'))
        
    im[1].save('./screenshots/result.pdf', save_all=True, append_images=im)
    

    print('processo terminado.')


with open('path.txt', 'r') as fs:
    for f in fs:
        f = f.strip()
        take_screenshot(f)

browser.quit()
