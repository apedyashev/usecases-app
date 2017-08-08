import {connect} from 'react-redux';
import {createUsecase} from '../../Home/modules/usecases';

import AddUsecase from '../components/AddUsecase';

const mapDispatchToProps = {
  createUsecase,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUsecase);
