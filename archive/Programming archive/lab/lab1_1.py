import math
import os
import shutil
import re

## zad 1
def zad1():
    imie = "Maks nuhuh"
    print(imie)
## zad 1

## zad 2
def zad2():
    imie = input("Wpisz imię: ")
    nazwisko = input("Wpisz nazwisko: ")
    print(imie)
    print(nazwisko)
## zad 2

## zad 3
def zad3():
    wynik = int(input("Wpisz liczbę: ")) ** 3
    print(wynik)
## zad 3

## zad 4
def zad4():
    a = 2
    b = 9
    pole = a * b
    print("Wynik: " + str(pole))
## zad 4

## zad 5
def zad5():
    a = 2
    b = 2
    c = 2
    h = (a * math.sqrt(3)) / 2
    p = int((a + b + c) / 2)
    pole1 = (a * h) / 2
    print(pole1)
    pole2 = math.sqrt(p*((p - a)*(p - b)*(p - c)))
    print(pole2)
## zad 5

## zad 6 
def zad6():
    a = 2
    b = 2
    c = 2
    h = (a * math.sqrt(3)) / 2
    p = (a + b + c) / 2
    pole1 = (a * h) / 2
    print(format((pole1), ".2f"))
    pole2 = math.sqrt(p*((p - a)*(p - b)*(p - c)))
    print(format((pole2), ".2f"))
## zad 6

## zad 7
def zad7():
    k = 10
    n = 2
    pow = math.pow(k, n)
    print(format((pow), ".2f"))
## zad 7

## zad 8
def zad8():
    a = int(input("Wpisz A: "))
    b = int(input("Wpisz B: "))
    print(format((a + b), ".3f"))
    print(format((a - b), ".3f"))
    print(format((a / b), ".3f"))
    print(format((a * b), ".3f"))
    print(format((a ** b), ".3f"))
    print(format((a % b), ".3f"))
    print(format((a // b), ".3f"))
## zad 8 

## zad 9 
def zad9():
    string = input("Wpisz coś: ")
    print(len(string))
## zad 9 

## zad 10
def zad10():
    os.system("cd C:/")
    os.system("mkdir folder")
    os.system("cd C:/windows/system32")
    source_folder = "C:/windows/system32"
    destination_folder = "C:/folder"
    for file_name in os.listdir(source_folder):
        source = source_folder + file_name
        destination = destination_folder + file_name
        if re.search('.??g', file_name):
            shutil.copy(source, destination)
            print('copied', file_name)

    ## .??g

## zad 10