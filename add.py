add_table = {

    # "XY": ["R", carry] X + Y = R plus carry
    
    "00": ["0", None],
    "01": ["1", None],
    "02": ["2", None],
    "03": ["3", None],
    "04": ["4", None],
    "05": ["5", None],
    "06": ["6", None],
    "07": ["7", None],
    "08": ["8", None],
    "09": ["9", None],
    
    "10": ["1", None],
    "11": ["2", None],
    "12": ["3", None],
    "13": ["4", None],
    "14": ["5", None],
    "15": ["6", None],
    "16": ["7", None],
    "17": ["8", None],
    "18": ["9", None],
    "19": ["0", "1"],
    
    "20": ["2", None],
    "21": ["3", None],
    "22": ["4", None],
    "23": ["5", None],
    "24": ["6", None],
    "25": ["7", None],
    "26": ["8", None],
    "27": ["9", None],
    "28": ["0", "1"],
    "29": ["1", "1"],
    
    "30": ["3", None],
    "31": ["4", None],
    "32": ["5", None],
    "33": ["6", None],
    "34": ["7", None],
    "35": ["8", None],
    "36": ["9", None],
    "37": ["0", "1"],
    "38": ["1", "1"],
    "39": ["2", "1"],
    
    "40": ["4", None],
    "41": ["5", None],
    "42": ["6", None],
    "43": ["7", None],
    "44": ["8", None],
    "45": ["9", None],
    "46": ["0", "1"],
    "47": ["1", "1"],
    "48": ["2", "1"],
    "49": ["3", "1"],
    
    "50": ["5", None],
    "51": ["6", None],
    "52": ["7", None],
    "53": ["8", None],
    "54": ["9", None],
    "55": ["0", "1"],
    "56": ["1", "1"],
    "57": ["2", "1"],
    "58": ["3", "1"],
    "59": ["4", "1"],
    
    "60": ["6", None],
    "61": ["7", None],
    "62": ["8", None],
    "63": ["9", None],
    "64": ["0", "1"],
    "65": ["1", "1"],
    "66": ["2", "1"],
    "67": ["3", "1"],
    "68": ["4", "1"],
    "69": ["5", "1"],
    
    "70": ["7", None],
    "71": ["8", None],
    "72": ["9", None],
    "73": ["0", "1"],
    "74": ["1", "1"],
    "75": ["2", "1"],
    "76": ["3", "1"],
    "77": ["4", "1"],
    "78": ["5", "1"],
    "79": ["6", "1"],
    
    "80": ["8", None],
    "81": ["9", None],
    "82": ["0", "1"],
    "83": ["1", "1"],
    "84": ["2", "1"],
    "85": ["3", "1"],
    "86": ["4", "1"],
    "87": ["5", "1"],
    "88": ["6", "1"],
    "89": ["7", "1"],
    
    "90": ["9", None],
    "91": ["0", "1"],
    "92": ["1", "1"],
    "93": ["2", "1"],
    "94": ["3", "1"],
    "95": ["4", "1"],
    "96": ["5", "1"],
    "97": ["6", "1"],
    "98": ["7", "1"],
    "99": ["8", "1"],
}

def add(x, y):
    place = 1
    
    result = ""
    carry = None
    digit_x = None
    digit_y = None
    while place <= len(x) or place <= len(y):
        if place > len(x):
            digit_x = "0"
        else:
            digit_x = x[-place]
        if place > len(y):
            digit_y = "0"
        else:
            digit_y = y[-place]
        if carry is not None:
            result_digit_a, carry_a = add_table[digit_x + digit_y]
            result_digit, carry_b = add_table[result_digit_a + carry]
            carry_a = carry_a or "0"
            carry_b = carry_b or "0"
            carry, _ = add_table[carry_a + carry_b]
            if carry == "0":
                carry = None
        else:
            result_digit, carry = add_table[digit_x + digit_y]
        result = result_digit + result
        place = place + 1
    
    if carry:
        result = carry + result
    
    return result

def main():
    for x in range(0, 100):
        for y in range(0, 100):
            xs = str(x)
            ys = str(y)
            expected = str(x + y)
            print(xs, "+", ys, "=")
            result = add(xs, ys)
            print("  ", result)
            if expected != result:
                print("  Expected " + expected)
                exit(1)

    result = add("54", "4123")
    print(result)

def main2():
    result = add("4", "0")
    print(result)

main()

    