import Reactfrom "react";

const withPlaceholder = WrappedComponent => (
  (props) => (
    <WrappedComponent 
      placeholder="my HOC"
      //used to get ALL the props
      {... props}
    />
  )
)

export default withPlaceholder