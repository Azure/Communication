import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen';
import { createThread } from '../core/sideEffects';

const mapStateToProps = () => ({
  createThreadHandler: () => {
    createThread();
  }
});

export default connect(mapStateToProps)(HomeScreen);
