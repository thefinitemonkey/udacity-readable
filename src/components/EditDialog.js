import React, { Component } from "react";
import { ModalContainer, ModalDialog } from "react-modal-dialog";
import { addPost, editPost, addPostComment, editComment } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class EditDialog extends Component {
  state = {
    isShowingModal: this.props.isShowingModal || false,
    category:
      (this.props.modalItem && this.props.modalItem.category) ||
      this.props.match.params.catname ||
      "none",
    modalItem: { ...this.props.modalItem } || {
      author: "",
      title: "",
      body: ""
    }
  };

  componentWillReceiveProps(props) {
    this.props = props;
    let catname = "none";
    if (this.props.modalItem) catname = this.props.modalItem.category;
    const newItem = !this.props.modalItem
      ? { author: "", title: "", body: "" }
      : { ...this.props.modalItem };
    this.setState({
      isShowingModal: this.props.isShowingModal,
      category: catname,
      modalItem: newItem,
      modalAction: this.props.modalAction,
      modalType: this.props.modalType
    });
  }

  handleClose = () => {
    this.setState({ isShowingModal: false });
    this.props.handleCloseDialog();
  };

  handleChangeCategory = data => {
    this.setState({ category: data });
  };

  handleAuthorChange = data => {
    this.setState({ modalItem: { ...this.state.modalItem, author: data } });
  };

  handleTitleChange = data => {
    this.setState({ modalItem: { ...this.state.modalItem, title: data } });
  };

  handleBodyChange = data => {
    this.setState({ modalItem: { ...this.state.modalItem, body: data } });
  };

  handleSaveChanges = () => {
    // Make the call to the appropriate action based on the type
    // of activity being completed using the appropriate data
    const { id, parentId, author, title, body } = this.state.modalItem;
    if (this.state.modalType === "post" && this.state.modalAction === "add") {
      const actionObj = { author, title, body, category: this.state.category };
      this.props.addPost(actionObj);
    }
    if (this.state.modalType === "post" && this.state.modalAction === "edit") {
      const actionObj = { id, title, body };
      this.props.editPost(actionObj);
    }
    if (
      this.state.modalType === "comment" &&
      this.state.modalAction === "add"
    ) {
      const actionObj = { parentId, body, author };
      this.props.addPostComment(actionObj);
    }
    if (
      this.state.modalType === "comment" &&
      this.state.modalAction === "edit"
    ) {
      const actionObj = { body };
      this.props.editComment(actionObj);
    }

    this.handleClose();
  };

  render = () => {
    let { modalItem, modalType, modalAction } = this.state;
    const dispAction = modalAction === "edit" ? "Edit" : "Add";
    const dispType = modalType === "post" ? "Post" : "Comment";
    const category = this.state.category;

    return (
      <div>
        {this.state.isShowingModal && (
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose}>
              <div>
                <h2>{`${dispAction} ${dispType}`}</h2>
                {modalType !== "comment" && (
                  <div>
                    <div>
                      <label
                        className="category-selector-label"
                        htmlFor="categorySelector"
                      >
                        Category:
                      </label>
                      {category === "none" || category === "all" ? (
                        <select
                          id="categorySelector"
                          value={this.state.category}
                          onChange={e =>
                            this.handleChangeCategory(e.target.value)
                          }
                        >
                          {this.props.categories &&
                            this.props.categories.map(cat => (
                              <option key={cat.name} value={cat.name}>
                                {cat.name}
                              </option>
                            ))}
                        </select>
                      ) : (
                        <span
                          id="categorySelector"
                          className="default-category-selection"
                        >
                          {category}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    id="author"
                    value={modalItem && modalItem.author}
                    placeholder="Author Name"
                    onChange={e => this.handleAuthorChange(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="title"
                    value={modalItem && modalItem.title}
                    placeholder="Title"
                    onChange={e => this.handleTitleChange(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    id="body"
                    rows="5"
                    cols="50"
                    value={modalItem && modalItem.body}
                    onChange={e => this.handleBodyChange(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className="save-button"
                    onClick={this.handleSaveChanges}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </ModalDialog>
          </ModalContainer>
        )}
      </div>
    );
  };
}

function mapStateToProps({ categories }) {
  return { categories: categories.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: data => dispatch(addPost(data)),
    editPost: data => dispatch(editPost(data)),
    addPostComment: data => dispatch(addPostComment(data)),
    editComment: data => dispatch(editComment(data))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditDialog)
);
