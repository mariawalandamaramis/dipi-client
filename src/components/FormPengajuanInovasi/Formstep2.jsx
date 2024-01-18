import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from './Formeditortoolbar'

const Formstep2 = () => {
	const [editorContent, setEditorContent] = useState('')
	const [showContent, setShowContent] = useState(false)
	const handleEditorChange = (content) => { setEditorContent(content) }
	const handleViewContonet = () => { setShowContent(!showContent) }

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