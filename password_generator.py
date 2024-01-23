import random
print('Welcome to the password generator :D')
symbols = ['!','@','#','$','%','^','&','*','(',')','~','/','?','>','<']
letters = ['a','s','d','f','g','h','j','k','l','m','n','b','v','c','x','z','q','w','e','r','t','y','u','i','o','p','A','S','D','F','G','H','J','K','L','P','O','I','U','Y','T','R','E','W','Q','Z','X','C','V','B','N','M']
numbers = ['0','1','2','3','4','5','6','7','8','9']
symbol = int(input('How many symbols would you like in your password: '))
letter = int(input('How many letters would you like in your password: '))
number = int(input('How many numbers would you like in your password: '))
ls = []
def password_generator(symbols, letters, numbers):
    for _ in range(symbol):
        selected_item = random.choice(symbols) 
        ls.append(selected_item)
    for _ in range(letter):
        selected_item = random.choice(letters) 
        ls.append(selected_item)
    for _ in range(number):
        selected_item = random.choice(numbers) 
        ls.append(selected_item)
password_generator(symbols, letters, numbers)
random.shuffle(ls)
string = ''.join(ls)
print(string)
 