import React from 'react'
import { Modal } from 'react-bootstrap'
import "./RegisterModal.css"

export default function RegisterModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-header">
                    <img src="/images/jayto-logo-1.png" alt="jayto" className="modal-icon" />
                    <Modal.Title id="contained-modal-title-vcenter">
                        ورود یا ثبت نام
                    </Modal.Title>
                    <span dir="rtl">برای ورود یا ثبت نام شماره موبایل خودتان را وارد کنید.</span>
                </div>

                <input type="number" class="form-control" placeholder='09xxxxxxxxx' />
                <button
                    type="button"
                    class="btn btn-secondary w-100 my-2"
                >
                    ادامه
                </button>
            </Modal.Body>
        </Modal>
    )
}
