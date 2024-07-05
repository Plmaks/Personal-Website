import threading
import random
import time

s = "890123456789012345678901234567890123456789012345678901234567890123456789012345678900123456789001234567890"
def printtext():
    string = list(s)
    random.shuffle(string)
    result = " ".join(string)
    while True:
        random.shuffle(string)
        print(result)
        time.sleep(0.1)


threads = []

for i in range(100):
    t = threading.Thread(target=printtext)
    t.daemon = True
    threads.append(t)

for i in range(100):
    threads[i].start()

for i in range(100):
    threads[i].join()
