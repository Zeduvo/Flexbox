.menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background:black;
}

.menu li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 10px 5px;
}

.menu li a:hover {
    background:#404040;
}

.single-nav ul{
    display: flex;
    justify-content: space-between;      
}

.single-nav li{
   flex-grow: 1;
   text-align: center;
}

@media (max-width:750px){
   
    .single-nav ul{
        flex-direction: column;
    }

    .single-nav li{
        text-align: left;
     }

}