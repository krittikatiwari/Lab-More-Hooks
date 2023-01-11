import React,{useEffect,useState,useRef} from 'react'
function Morehook() {


    const [value, setvalue] = useState(['']);


    const test=(e)=>{
        e.preventDefault();
        setvalue(e.target.value)
     
    }

    const firstref=useRef(null);

    const [text,set] = useState([]);


    // store+=value;

     function check (e) {
        if(e){
        set(prevstate=>[...prevstate,value]);
        setvalue('')
        }
    }

    useEffect(()=>{
        firstref.current.focus();
    })


    const top=()=>{
        firstref.current.focus();
    }

 
    const toggle=(elt,index)=>{

        if(document.getElementById(`${index}`).innerHTML===elt){
        document.getElementById(`${index}`).innerHTML="Text is hidden";
        }
        else{
            document.getElementById(`${index}`).innerHTML=elt;
        }
        

    }
  return (
    <div>
        
        <div>
            <input placeholder='type your task' ref={firstref} value={value} onChange={(e)=>test(e)}/>
            <button onClick={()=>check(value)} >Add</button>
            {
                text.map((elt,index)=>{
                    return(
                        <div>
                            <div>
                        <div>
                            <ul className='list'>
                                <li id={index}>
                                    {elt}
                                    
                                </li>
                                <div>
                                <div>
                                        <button onClick={()=>toggle(elt,index)} >toggle</button>
                                    </div>
                                
                                    </div>
                            </ul>

                            
                        </div>
                        </div>
                       
                        
                        
                        </div>
                    )
                })
            }
            <button onClick={top} >Back to top</button>
            
            
        </div>
    </div>
  )
}

export default Morehook