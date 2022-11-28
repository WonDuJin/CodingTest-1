# with open('head.txt','r') as text_file:
#   pythonHTML=text_file.readlines()

# with open('pythonHTML.txt','w') as file:
#   file.writelines()
#   file.close()

filename = 'head.txt''main.txt'
f = open(filename,'r')
new_filename = 'pythonHTML.txt'
w = open(new_filename,'w')

lines = f.read()
w.write(lines +"\n")
w.close()