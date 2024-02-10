import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import Fromeditortoolbar, { modules, formats } from './Formeditortoolbar'

const Formstep2 = ({ register, watch, setValue, errors, formSubmitted  }) => {
	const [editorContent, setEditorContent] = useState('')
	const [showContent, setShowContent] = useState(false)
	const handleViewContonet = () => { setShowContent(!showContent) }

	useEffect(() => {
		register("description", {
			required: "isi detail dulu",
		})
	}, [register])

	const handleEditorChange = (content) => {
		//console.log(content)
		setValue("description", content)
		setEditorContent(content)
	}

	const contentValue = watch("description")

	return (
		<>
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
					value={contentValue}
				/>

				<div className={`${formSubmitted ? ('invisible'): ('visible')} text-red-500 text-xs font-semibold leading-5 mt-2 flex flex-row max-md:max-w-full`}>
					{errors.description && <p>{errors.description.message}</p>}
				</div>

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