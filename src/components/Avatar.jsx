
const Avatar = ({ src, altProp }) => {


    return <div className="Avatar">
        <img src={src} alt={altProp ? altProp : 'Avatar image'} />
    </div>
        
    
}

export default Avatar;