import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineHistory } from 'react-icons/ai';
import { useState } from 'react';
import Modal from '../../../../Components/Atoms/Modal/Modal';
import History from './History';
import Edit from './Edit';

export default function Action({ data }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);


  return (
    <>
      <div className='flex pr-2 items-center justify-between'>{
        data?.status === "More Information" ? <button onClick={() => setEdit(true)} className='text-site-text-300 font-semibold font-roboto'>Edit</button> : <NavLink className={"text-site-text-100 font-semibold font-roboto"} to={`/jobs/${data?.jobId}/${data?.jobTitle?.split(" ").join('-')}`}>View</NavLink>}
        <AiOutlineHistory fontSize={22} onClick={() => setOpen(true)} className='cursor-pointer font-black text-primary' />
      </div>
      {open && <Modal open={open} setOpen={setOpen}>
        <History id={data?.jobId} />
      </Modal>}
      {edit && <Modal open={edit} setOpen={setEdit}>
        <Edit applicientInfo={data} setEdit={setEdit} attechment={data?.attachment} />
      </Modal>}
    </>
  )
}


