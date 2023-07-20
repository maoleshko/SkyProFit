import React, { useState } from 'react'
import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { ProfileIcon } from '../main/header/profileIcon'

import { MYCARDS } from '../../constants'
import { ModalWorkout } from './modalWorkoutsList'
import { Logo } from '../Logo/Logo'

export function Profile() {
  const navigate = useNavigate()

  const handleLoginChange = () => {
    navigate('/newlogin')
  }

  function handlePasChange() {
    navigate('/newpas')
  }
  const [selectedCardId, setSelectedCardId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (cardId) => {
    setSelectedCardId(cardId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <Styled.ContainerProfile>
        <Styled.HeaderContainer>
          <Logo />
          <ProfileIcon />
        </Styled.HeaderContainer>
        <Styled.ProfileTitle>Мой профиль</Styled.ProfileTitle>
        <Styled.ProfileSubTitle>Логин: sergey.petrov96</Styled.ProfileSubTitle>
        <Styled.ProfileSubTitle>Пароль: 4fkhdj880d</Styled.ProfileSubTitle>
        <Styled.BtnBox>
          <Styled.BtnChange onClick={handleLoginChange}>
            Редактировать логин
          </Styled.BtnChange>
          <Styled.BtnChange onClick={handlePasChange}>
            Редактировать пароль
          </Styled.BtnChange>
        </Styled.BtnBox>
      </Styled.ContainerProfile>

      <Styled.ProfileTitle>Мои курсы</Styled.ProfileTitle>
      <Styled.CoursesContainer>
        {MYCARDS.map((card, i) => (
          <div>
            <Styled.CourseCard
            src={card.image}
            alt={card.alt}
            key={i}
          />
          <Styled.GoBtn onClick={() => handleOpenModal(card.id)} >Перейти →</Styled.GoBtn>
          </div>
        ))}
      </Styled.CoursesContainer>
      {isModalOpen && (
        <ModalWorkout cardId={selectedCardId} onClose={handleCloseModal} />
      )}
    </div>
  )
}
