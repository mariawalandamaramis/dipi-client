import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from './Formeditortoolbar'
// import { useDispatch, useSelector } from 'react-redux'
// import { getValueForm } from '../../redux/slice/inovasi-slice'

const Formstep2 = ({ stateLocalMOM, handleInput }) => {
	//const dispatch = useDispatch()
	const [editorContent, setEditorContent] = useState('')

	// useEffect(() => {
	// 	// Pastikan bahwa stateLocalMOM dan stateLocalMOM.detail_inovasi tidak null atau undefined
	// 	if (stateLocalMOM && stateLocalMOM.detail_inovasi !== undefined) {
	// 	  setEditorContent(stateLocalMOM.detail_inovasi);
	// 	}
	//   }, [stateLocalMOM]); // Ubah dependensi menjadi [stateLocalMOM]


	const [showContent, setShowContent] = useState(false)
	const handleViewContonet = () => { setShowContent(!showContent) }

	const handleEditorChange = (content) => {
		setEditorContent(content)

		handleInput({
			target: {
				name: 'detail_inovasi',
				value: content,
			},
		});

		// stateLocalMOM((prevState) => ({
		// 	...prevState,
		// 	detail_inovasi: content,
		// }))

		// if (editorContent !== "") {
		// 	dispatch(getValueForm({form: 'form2', value: stateLocal }))
		// }

	}


	// const stateLocal = {detail_inovasi : editorContent}
	// // const handleNotFocus = () => { 
	// // 	if (editorContent !== "") {
	// // 		dispatch(getValueForm({form: 'form2', value: stateLocal }))
	// // 	}
	// // } 

	// // console.log(editorContent)

	// // console.log(useSelector((state) => state.inovasi))

	return (
		<>
			<div className='mb-8'>
				<h2 className='text-2xl font-bold'>Ceritakan Lebih Detail Inovasimu ?</h2>
				<p className='text-lg font-normal'>Buatlah penjelasan secara detail dari pengajuan inovasimu</p>
			</div>
			<div className='flex flex-col'>
				<label className='text-lg font-medium mb-2' htmlFor="">Detail Inovasi</label>
				<Fromeditortoolbar toolbarId={'t1'} />
				<ReactQuill
					theme="snow"
					placeholder={"Deskripsikan inovasimu secara rinci dan detail."}
					modules={modules('t1')}
					formats={formats}
					onChange={handleEditorChange}
					className='h-96'
					value={stateLocalMOM.detail_inovasi}
				// name='detail_inovasi'
				// value={stateLocalMOM.detail_inovasi}
				// onChange={(content, delta, source, editor) => handleInput3(editor, 'detail_inovasi')}
				// id='detail_inovasi'
				// name='detail_inovasi'
				// value={stateLocalMOM.detail_inovasi}
				// onChange={handleInput}
				// onBlur={handleNotFocus}
				/>





				<button onClick={handleViewContonet} className='bg-green-900 h-10 py-4 px-3.5 text-white text-sm font-semibold flex items-center justify-center gap-3'> {showContent ? 'Sembunyikan Hasil' : 'Lihat Hasil'} </button>
				{
					showContent && (
						<div className='text-editor mt-5 border p-3'>
							<div dangerouslySetInnerHTML={{ __html: editorContent }} />
						</div>
					)
				}
			</div>
		</>
	)
}

export default Formstep2