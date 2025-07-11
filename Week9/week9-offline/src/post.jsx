export function PostComponent(props){
  
  return <div style={{background:"white",width:350,borderRadius:20,padding:20,margin: "0 auto"}}>
    <div style={{ display: "flex"}}>
      <img src={props.image} alt="test"
      style = {{
        width: 40,
        height: 40,
        borderRadius: 20
      }}/>

      <div style={{marginLeft: 10}}>
        <div>
          {props.name}
        </div>
        <div>
          {props.subtitle}
        </div>


        {(props.time !== undefined) ? <div style={{display: "flex"}}>
          <div>
            {props.time}
          </div>
          <img src='https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE=' 
          style={{height:10,width:10,padding:5}}/>
        </div> : <div></div> } 
        
      </div>
    </div>

    <div style={{marginTop:10}}>
      {props.description}
    </div>
    </div>
  
}