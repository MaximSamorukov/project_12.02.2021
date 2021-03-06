import React from 'react';
import Popup from './Popup.jsx';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsShown: false,
      popupData: {},
    }
  }

  setPopupIsNotShown() {
    this.setState({ popupIsShown: false })
  }

  onClicked(e) {
    const { data } = e;
    let { popupIsShown } = this.state;
    popupIsShown = !popupIsShown;
    if (popupIsShown) {
      this.setState({
        popupIsShown,
        popupData: data,
      })
    } else {
      this.setState({
        popupIsShown,
      })
    }
  }

  render() {
    const { info } = this.props;
    const { popupIsShown, popupData } = this.state;
    return (
      <div className="site-layout-content list-container ag-theme-alpine">
        {popupIsShown ? <Popup popupData={popupData} callback={this.setPopupIsNotShown.bind(this)} /> : ''}
        <AgGridReact
          onRowClicked={this.onClicked.bind(this)}
          rowData={info}
          pagination="true"
          paginationAutoPageSize="true">
          <AgGridColumn field="id" headerName="ID" flex="1"></AgGridColumn>
          <AgGridColumn field="name" headerName="NAME" flex="1"></AgGridColumn>
        </AgGridReact>
      </div>
    )
  }
}