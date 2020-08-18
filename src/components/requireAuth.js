import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    useEffect(() => {
      shouldNavigateAway();
    }, []);

    const shouldNavigateAway = () => {
      if (!props.auth) {
        props.history.push("/");
      }
    };

    return <ChildComponent {...props} />;
  };

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

// import React, { Component } from "react";
// import { connect } from "react-redux";

// export default (ChildComponent) => {
//   class ComposedComponent extends Component {
//     // Our component just got rendered
//     componentDidMount() {
//       this.shouldNavigateAway();
//     }

//     // Our component just got updated
//     componentDidUpdate() {
//       this.shouldNavigateAway();
//     }

//     shouldNavigateAway() {
//       if (!this.props.auth) {
//         this.props.history.push("/");
//       }
//     }

//     render() {
//       return <ChildComponent {...this.props} />;
//     }
//   }

//   function mapStateToProps(state) {
//     return { auth: state.auth };
//   }

//   return connect(mapStateToProps)(ComposedComponent);
// };
