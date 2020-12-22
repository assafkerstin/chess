function GetSquareLocationText(Col,Row) //Accepts square location arguments - Column and Row Example [3,2] and returns Chess Style location text Example C2
{
    let Result="";

    
    switch(Col){
        case 1: Result="A"; break;
        case 2: Result="B"; break;
        case 3: Result="C"; break;
        case 4: Result="D"; break;
        case 5: Result="E"; break;
        case 6: Result="F"; break;
        case 7: Result="G"; break;
        case 8: Result="H"; 
    }
    
    Result += Row.toString();

    return(Result);
}



function CreateSquares(BoardContainer)   //Adds a new HTML element for each Board Square
{
    //let NewSqr = document.createElement("img");
    //NewSqr.setAttribute("class", "BoardSquare");
    let debug="";
    let Parent = document.getElementById(BoardContainer);
    //Parent.insertBefore(NewSqr,null);

    let Color=false; //Boolean flag variable to help us alternate between the colors
    
    for(let i=8; i>=1; i--)
    {
        for(let j=1;j<=8;j++)
        {
            let NewSqr = document.createElement("img"); //Create a new element
            
            NewSqr.setAttribute("class", "BoardSquare"); //Set class attribute   
            NewSqr.setAttribute("loc",GetSquareLocationText(j,i)); //Set location string
            if(Color) NewSqr.style.backgroundColor="red" //Set Square color
                else NewSqr.style.backgroundColor="lightgray";
                            Color=!Color;

            Parent.insertBefore(NewSqr,null);
            debug +=  GetSquareLocationText(j,i);
            debug +=" | ";
        }
        
        Color=!Color;
    }

        document.write(debug);
}