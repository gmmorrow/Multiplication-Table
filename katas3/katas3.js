const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function display(header, answer) {
    //logic for header
    let headerOutput = document.getElementById("d1")
    let headerElement = document.createElement("h1")
    let newText = document.createTextNode(header)
    headerElement.appendChild(newText)
    headerOutput.appendChild(headerElement)

    //logic for answer
    let answerOutput = document.getElementById("d1")
    let div = document.createElement("div")
    let textt = document.createTextNode(answer)
    div.appendChild(textt)
    answerOutput.appendChild(div)
}

function Katas1() { //Display the numbers from 1 to 25
    let answer = []
    let header = "Katas 1"
    for (let i = 1; i <= 25; i++) {
        answer.push(i)
    }
    display(header, answer)
}
Katas1()


function Katas2() { //Display the numbers from 25 to 1
    let answer = []
    let header = "Katas 2"
    for (let i = 25; i >= 1; i--) {
        answer.push(i)
    }
    display(header, answer)
}
Katas2()


function Katas3() { //Display the numbers from -1 to -25
    let answer = []
    let header = "Katas 3"
    for (let i = -1; i >= -25; i--) {
        answer.push(i)
    }
    display(header, answer)
}
Katas3()


function Katas4() { //Display the numbers from -25 to -1
    let answer = []
    let header = "Katas 4"
    for (let i = -25; i <= -1; i++) {
        answer.push(i)
    }
    display(header, answer)
}
Katas4()


function Katas5() { //Display the odd numbers from 25 to -25
    let answer = []
    let header = "Katas 5"
    for (let i = 25; i >= -25; i--) {
        if (i % 2 === 1 | i % 2 === -1) {
            answer.push(i)

        }
    } display(header, answer)
}
Katas5()


function Katas6() { //Display the numbers divisible by 3 up through 100
    let answer = []
    let header = "Katas 6"
    for (let i = 3; i <= 100; i = i + 3) {
        if (i % 3 === 0) {
            answer.push(i)
        }
    } display(header, answer)
}
Katas6()


function Katas7() { //Display the numbers divisible by 7 up through 100
    let answer = []
    let header = "Katas 7"
    for (let i = 7; i <= 100; i = i + 7) {
        if (i % 7 === 0) {

            answer.push(i)
        }
    } display(header, answer)
}
Katas7()


function Katas8() { //Display the numbers divisible by 3 and the numbers divisible by 7 down from 100
    let answer = []
    let header = "Katas 8"
    for (let i = 100; i >= 3; i--) {
        if (i % 3 === 0 | i % 7 === 0) {

            answer.push(i)
        }
    } display(header, answer)
}
Katas8()


function Katas9() { //Display the odd numbers divisible by 5 up through 100
    let answer = []
    let header = "Katas 9"

    for (let i = 5; i <= 100; i = i + 5) {
        if (i % 5 === 0 && i % 2 === 1) {
            answer.push(i)
        }
    } display(header, answer)
}
Katas9()


function Katas10() { //Display the 20 elements of sampleArray
    let answer = []
    let header = "Katas 10"
    for (let i = 0; i <= sampleArray.length - 1; i++) {
        answer.push(sampleArray[i])


    }
    display(header, answer)
}
Katas10()


function Katas11() { //Display all the even numbers contained in sampleArray
    let answer = []
    let header = "Katas 11"
    for (let i = 0; i <= sampleArray.length - 1; i++) {
        if (i % 2 === 0) {
            answer.push(sampleArray[i])
        }
    } display(header, answer)
}
Katas11()


function Katas12() { //Display all the odd numbers contained in sampleArray
    let answer = []
    let header = "Katas 12"
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 1) {
            answer.push(sampleArray[i])

        }
    } display(header, answer)
}
Katas12()


function Katas13() { //Display the numbers divisible by 8 in sampleArray
    let answer = []
    let header = "Katas 13"
    for (let i = 8; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            answer.push(sampleArray[i])

        }
    } display(header, answer)
}
Katas13()


function Katas14() { //Display the square of each element in sampleArray

    let answer = []
    for (let x = 0; x <= sampleArray.length - 1; x++) {

        answer.push(" " + sampleArray[x] * sampleArray[x] + " ")
    }
    return answer
}
display("Katas 14", Katas14())



function Katas15() { //Display the sum of all the numbers from 1 to 20.
    let r1 = 1
    let r2 = 2
    let r3 = 0
    let answer = []
    for (let x = 1; x <= 19; x++) {
        r3 = r1 + r2
        r1 = r3
        r2 = r2 + 1

    }
    answer.push(" " + r3 + " ")
    return answer

}
display("Katas15", Katas15())


function Katas16() //Display the sum of all the elements in sampleArray.
{
    let answer = []
    let r1 = sampleArray[0]
    let r2 = sampleArray[1]
    let r3 = 0
    for (x = 1, y = 2; x <= sampleArray.length - 1; x++ , y++) {
        r3 = r1 + r2
        r1 = r3
        r2 = sampleArray[y]
    }

    answer.push(" " + r3 + " ")
    return answer
}
display("Katas16", Katas16())


function Katas17() { //Display the smallest element in sampleArray

    let answer = []
    answer.push(" " + Math.min(...sampleArray) + " ")
    return answer
}
display("Katas 17", Katas17())


function Katas18() { //Display the largest element in sampleArray

    let answer = []
    answer.push(" " + Math.max(...sampleArray) + " ")
    return answer
}
display("Katas 18", Katas18())








