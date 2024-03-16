import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div className={css.container}>
            <Oval
                visible={true}
                height="100"
                width="100"
                color="#111"
                secondaryColor="#111"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;