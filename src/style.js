
import styled from 'styled-components'

export const Container = styled.div`

div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     align-items: center;
    justify-content: center;
}

h1{
    text-align:center;
    margin: 0;
    display:flex;
     align-items: center;
    justify-content: center;
}
` 

export const MovieList = styled.ul`
ul{
 display: flex;
  align-items: center;
  justify-content: center;
    flex-direction: row;
      flex-wrap: wrap;


  
}
`

export const Movie = styled.li`
    li{
   display: flex;
   flex-direction: column;
     flex-wrap: wrap;

}

    img{
        display:flex;
       width: 400px;
       flex-direction: row;
         flex-wrap: wrap;
    }

   span{
    font-weight: bold;
    font-size: 120%;
    text-align: center;
      display: flex;
   } 
`