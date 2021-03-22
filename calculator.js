const calculator = (nilai1, nilai2, operator) => {
    switch(true) {
         case(operator == '+'):
            return nilai1 + nilai2;
            break;
            case(operator == '-'):
            return nilai1 - nilai2;
            break; 
            case(operator == '*'):
            return nilai1 * nilai2;
            break;
            case(operator == '/'):
            return nilai1 / nilai2;
            break;
            case(operator == '%'):
            return nilai1 % nilai2;
            break;
    }
 };
 
 console.log(calculator(12, 20, "+"));
