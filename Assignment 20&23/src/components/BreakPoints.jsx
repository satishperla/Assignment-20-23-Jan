import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function Breakpoint(){
    return(
<ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <div>Your app...<h1>This is breakpoint Componenet</h1></div>
</ThemeProvider>
    )
}
export default Breakpoint;