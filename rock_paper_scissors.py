rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

  
import random
ls = [rock,paper,scissors]
COMPUTERS_CHOICE = random.randint(0,2)
while True:
    YOUR_CHOICE = int(input('0 for stone, 1 for paper, 2 for scissors: '))
    number = ls[YOUR_CHOICE]
    print(f"Computer's choice :\n {ls[COMPUTERS_CHOICE]}")
    print(f'Your choice :\n {number}')
    
    if YOUR_CHOICE == 2 and COMPUTERS_CHOICE == 0:
        print('You lost :(')
    elif YOUR_CHOICE == 0 and COMPUTERS_CHOICE == 2:
        print('You win :D')   
    elif YOUR_CHOICE > COMPUTERS_CHOICE:
        print('You win :D')
    elif YOUR_CHOICE == COMPUTERS_CHOICE:
        print('Draw :|')
    else:
        print('You lost :(')