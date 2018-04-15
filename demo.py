columns = 4
rows = 3
last_cell = 0

for num_of_row in range(rows):
    for num_of_column in range(columns):
        print(num_of_column + last_cell)
    print('\n')
    last_cell += columns