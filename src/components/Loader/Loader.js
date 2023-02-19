import { MagnifyingGlass } from 'react-loader-spinner';

export function Loader() {
    return (
        <div style={{ position: 'fixed', top: '0', zIndex:'2', width:'100vw', height:'100wh', overflow:'hidden', background:'rgba(0,0,0.0.2)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
}
