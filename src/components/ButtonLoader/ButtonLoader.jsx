import { Oval } from 'react-loader-spinner';
// import css from './ButtonLoader.module.css';

const ButtonLoader = () => {
    return (
        <div>
            <Oval
                visible={true}
                height="20"
                width="20"
                color="#fff"
                secondaryColor="#fff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default ButtonLoader;