import csv
with open('C:\\Users\\carlos.dias\\Desktop\\python\\missao05.csv', newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)