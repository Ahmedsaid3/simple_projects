NAME = input('Name: ')
WEIGHT = float(input('Kilogram: '))
LENGHT = float(input('Metre: ')) 
WEIGHT_INDEX = (WEIGHT / LENGHT**2)
if 0 <= WEIGHT_INDEX <= 18.4:
    print(f'With a body mass index of {NAME} {round(WEIGHT_INDEX,2)}, he/she falls into the underweight category.')
elif 18.4 < WEIGHT_INDEX <= 24.9:
    print(f'With a body mass index of {NAME} {round(WEIGHT_INDEX,2)}, he/she falls into the normal category.')
elif 24.9 < WEIGHT_INDEX <= 29.9:
    print(f'With a body mass index of {NAME} {round(WEIGHT_INDEX,2)}, he/she falls into the overweight category.')
elif 29.9 < WEIGHT_INDEX <= 34.9:
    print(f'With a body mass index of {NAME} {round(WEIGHT_INDEX,2)}, he/she falls into the obese category.')
else:
    print(f'With a body mass index of {NAME} {round(WEIGHT_INDEX,2)}, he/she falls into the over obese category.')