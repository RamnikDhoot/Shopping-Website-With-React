import pic from '../assets/Images/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.avif';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={pic} alt="image" ></img>
            <h2 className="card-title">Testing h2</h2>
            <p classname="card-text">paragraph test</p>
        </div>
    );
}

export default Card