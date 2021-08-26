from selenium import webdriver
from selenium.webdriver import ChromeOptions, Chrome
import os, time
from PIL import Image

# Configurações 
options = webdriver.ChromeOptions()
def alt():
    resp = input('Deseja fazer alguma alteração? [y] $\n')
    link = ''
    
    with open('path.txt', 'r') as fs:
        for f in fs:
            link += f

    if resp == 'y':
        options.headless = False # mostra navegador
    else:
        options.headless = True # não mostra navegador
    
    print('Processando...')

    return [link, resp]

link = alt()
# options.headless = True # não mostra navegador
path = os.getcwd()+"\chromedriver_win.exe"
path = path.replace("/", "\\")
options.add_experimental_option("detach", True)
# options.add_argument('--start-maximized')
options.add_argument("--window-position=0, 0");
browser = webdriver.Chrome(executable_path=path, options=options)

images = []
imEmkt = []


if (link[1] == 'y'):
    browser.get(link[0])
    input('Continuar? [Enter]')
else:
    browser.get(link[0])

def define_size(size):
    browser.set_window_size(size, 1080)
    height = browser.execute_script("return document.body.scrollHeight")
    browser.set_window_size(size, height)
    height = str(height)
    size = str(size)
    url = './screenshots/'+size+'x'+height+'.png'
    images.append(url)

    if(int(size) < 800):
        imEmkt.append(url)
    else:
        pass

    return url

def take_screenshot():

    time.sleep(3)

    url = define_size(1920)
    browser.save_screenshot(url)
    
    url = define_size(1366)
    browser.save_screenshot(url)

    url = define_size(768)
    browser.save_screenshot(url)

    url = define_size(600)
    browser.save_screenshot(url)

    url = define_size(360)
    browser.save_screenshot(url)

    im = []
    
    for i in range(0, len(images)):
        im.append(images[i])
        im[i] = Image.open(images[i])
        im[i] = im[i].convert('RGB')
        print('Gerando pdf de visualização web, processo: '+ str(i+1))
    im[1].save('./screenshots/web.pdf', save_all=True, append_images=im)

    # emkt            

    for i in range(0, len(imEmkt)):
        print(i)
        imEmkt[i] = Image.open(imEmkt[i])
        imEmkt[i] = imEmkt[i].convert('RGB')     

        print('Gerando pdf de visualização email marketing, processo: '+ str(i+1))
    
    imEmkt[1].save('./screenshots/emkt.pdf', save_all=True, append_images=imEmkt)
    

    print('processo terminado.')


take_screenshot()

browser.quit()
