

export default function Card({userName,btnText = "girl"}){
    console.log("props: ",userName);
    
    return(
        <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://images.pexels.com/photos/30818195/pexels-photo-30818195/free-photo-of-person-observing-scenic-harbor-view-from-boat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{userName}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{btnText}</p>
            <p>0.01</p>
          </div>
        </div>
      </div>

    );    

};
