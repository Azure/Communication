import { connect } from 'react-redux';

import EndScreen from '../components/EndScreen';
import { addThreadMember } from '../core/sideEffects';

const mapDispatchToProps = (dispatch: any) => ({
  rejoinThread: async () => {
    await dispatch(addThreadMember());
  }
});

export default connect(null, mapDispatchToProps)(EndScreen);
