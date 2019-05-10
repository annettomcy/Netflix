class App extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      isLoading: true,
    };
    
  }

  componentWillMount() {
   setTimeout(() => {this.setState({isLoading:false})},6500)
     
   }
  render() {
    const {isLoading} = this.state
    
    return( 
      <div className={isLoading ? "index loading": "index"}>
           <h1 className="hypertube">Hypertube</h1>
            <div className="button sign-in red">
             Sign up for free ! 
           </div>
          <div className="button sign-up">
             Sign In
           </div>
       </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));