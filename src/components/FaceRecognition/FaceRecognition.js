// import './FaceRecognition.css';

const FaceRecognition = ({ imageLink }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="inputImage" src={ imageLink } width="500px" height="auto" />
            </div>
        </div>
    );
}

export default FaceRecognition;