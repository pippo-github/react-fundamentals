import makeIntroText from './makeIntroText';
import makeList from './makeList';
import makeBtn from './makeBtn';

const HomeComponent = () =>{
  
    return(
        <div>
            <div className='jumbotron pt-1 mt-4'>
                { makeIntroText() }
                { makeList }
                { makeBtn }
            </div>
        </div>
    )

}

export default HomeComponent