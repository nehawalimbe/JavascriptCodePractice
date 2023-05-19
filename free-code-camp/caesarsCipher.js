/**
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.
 */
/**
    A=N
    B=O
    c=P
    D=Q
    E R
    F S
    G T
    H U
    I V
    J W
    K X
    L Y
    M Z
    N A
    O B
    P C
    Q D
    R E
    S F
    T G
    U H
    V I
    W J
    X K
    Y L
    Z M
*/   

function rot13(str) {
    let referenceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charNumber = referenceString.indexOf(char);
        // console.log('chcracter -> ', char)
        // console.log('charNumber -> ', charNumber)
        if(charNumber != -1) {
            let newCharNumber = charNumber + 13;
            if (newCharNumber >= 26) {
                newCharNumber = newCharNumber - 26;
            }
            // console.log('newNumber =>',newCharNumber);
            newStr += referenceString[newCharNumber]
    
        } else {
            newStr += char;
        }
    }
    console.log('new string ->', newStr);
    return newStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

/**
Test Cases :-
rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 */