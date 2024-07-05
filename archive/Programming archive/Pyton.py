import math
import os

def calc():
    a = int(input("Wpisz A: "))
    b = int(input("Wpisz B: "))

    mode = input("+, -, /, *, **, %?: ")

    match mode:
        case "+":
            print(format((a + b), ".2f"))
        case "-":
            print(format((a - b), ".2f"))
        case "/":
            print(format((a / b), ".2f"))
        case "*":
            print(format((a * b), ".2f"))
        case "**":
            print(format((a ** b), ".2f"))
        case "%":
            print(format((a % b), ".2f"))

def przekątna():
    a = int(input("Wpisz A: "))
    d = a * math.sqrt(2)

    print(format(d, ".2f"))

def pow():
    print(format(math.pow(2,5), ".2f"))

## cmd
## os.chdir(C:\\)
## os.system("mkdir folder")
