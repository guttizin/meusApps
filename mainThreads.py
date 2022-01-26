import os
import shutil
import subprocess
import threading
import time
import tkinter
from tkinter import messagebox

# This code is to hide the main tkinter window
root = tkinter.Tk()
root.attributes("-disabled", 1)
root.withdraw()


# Message Box
messagebox.showinfo("Titulo Muito Loco", "Essa é aquela mensagem de informação")



def iniciarChamada(site):
	subprocess.call('ping '+ site +'.com.br > '+site+'.txt', shell=True)
	print(site + ' acabou o ping')

threads_list = list()
join_list = list()
for site in ['google', 'facebook', 'hotmail', 'geopix', 'youtube', 'gmail', 'globo', 'rocketseat']:
	x = threading.Thread(target=iniciarChamada, args=(site,))
	threads_list.append(x)
	print(x)
	#x.start()
	#print(x)
	print(threading.enumerate())

while(len(threads_list) > 0):
	print(threading.active_count())
	print(len(threads_list))
	
	todasThreads = threading.enumerate()
	while(threading.active_count() <= 3 and len(threads_list) > 0 ):
		#print(threads_list[0])
		print(threads_list[0].start())
		threads_list.pop(0)
	time.wait(1)

""" # Sequencial
for site in ['google', 'facebook', 'hotmail', 'geopix', 'youtube']:
	print('iniciando ' + site)
	subprocess.call('ping '+ site +'.com.br > '+site+'.txt', shell=True)
# Fim sequencial """

 #Testando join
for tr in threads_list:
    print('tzinho')
    print(tr)
# Fim testando join

""" #Verificando se estão alive
i = 0

while (i < 5):
	if not threads_list[0].is_alive():
		i = i + 1;
	if not threads_list[1].is_alive():
		i = i + 1;
	if not threads_list[2].is_alive():
		i = i + 1;
	if not threads_list[3].is_alive():
		i = i + 1;
	if not threads_list[4].is_alive():
		i = i + 1;
	print(i)
	#time.sleep(1)
#Fim verificação alive"""

"""    
while(x.is_alive()):
	print(aeae)
	time.sleep(1)
"""

os.system("PAUSE")