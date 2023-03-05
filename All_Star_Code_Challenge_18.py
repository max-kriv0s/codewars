def str_count(strng, letter):
    return len(strng.split(letter)) - 1

print(str_count("Hellooo", 'o'))