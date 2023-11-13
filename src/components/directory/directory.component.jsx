import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styless.css'

const Directory = ({categories}) => {
    return(
        <div className='categories-container'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
      </div>  
    );
}

export default Directory;