def check_grade(score):
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else: 
        grade = "F"

name = "Jordan"
score = 85
print("Student: " + name)
print("Score: " + score)
result = check_grade(score)
print(name + " earned a " + result)

for i in range(1,5): 
    print("Attempt " + str(i) + " logged.")
if result == "A":
    print("Great Job, " + name + "!")