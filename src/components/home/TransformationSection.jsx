import React from 'react'
import styled from 'styled-components'

const TransformationSection = () => {
  return (
    <TransformationContainer>
      <TransformationHeader>
        <TransformationTitle>Transform Your Music Career</TransformationTitle>
        <TransformationSubtitle>From struggling artist to sustainable career</TransformationSubtitle>
      </TransformationHeader>
      
      <TransformationGrid>
        <TransformationColumn>
          <TransformationColumnTitle>Before TrueFans CONNECT™</TransformationColumnTitle>
          <TransformationList>
            <TransformationItem negative>Waiting months for streaming pennies</TransformationItem>
            <TransformationItem negative>Relying on cash tips that vary wildly</TransformationItem>
            <TransformationItem negative>No way to follow up with supportive fans</TransformationItem>
            <TransformationItem negative>Struggling to build a sustainable income</TransformationItem>
            <TransformationItem negative>Limited data on your audience</TransformationItem>
            <TransformationItem negative>Dependent on algorithms and gatekeepers</TransformationItem>
          </TransformationList>
        </TransformationColumn>
        
        <TransformationDivider>
          <TransformationDividerLine />
          <TransformationDividerIcon>→</TransformationDividerIcon>
          <TransformationDividerLine />
        </TransformationDivider>
        
        <TransformationColumn>
          <TransformationColumnTitle>After TrueFans CONNECT™</TransformationColumnTitle>
          <TransformationList>
            <TransformationItem>Get paid the next day after every show</TransformationItem>
            <TransformationItem>Consistent, predictable income from donations</TransformationItem>
            <TransformationItem>Direct connection with your most supportive fans</TransformationItem>
            <TransformationItem>Multiple revenue streams beyond just music sales</TransformationItem>
            <TransformationItem>Detailed analytics about your audience</TransformationItem>
            <TransformationItem>Complete ownership of your career and fan relationships</TransformationItem>
          </TransformationList>
        </TransformationColumn>
      </TransformationGrid>
    </TransformationContainer>
  )
}

const TransformationContainer = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space['3xl']} ${({ theme }) => theme.space.md};
  }
`

const TransformationHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const TransformationTitle = styled.h2`
  font-size: clamp(1.875rem, 3vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  }
`

const TransformationSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`

const TransformationGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const TransformationColumn = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const TransformationColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.lg};
  text-align: center;
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const TransformationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TransformationItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ negative, theme }) => negative ? theme.colors.errorRed : theme.colors.successGreen};
  padding: ${({ theme }) => theme.space.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: ${({ negative }) => negative ? '"✕"' : '"✓"'};
    margin-right: ${({ theme }) => theme.space.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ negative, theme }) => negative ? theme.colors.errorRed : theme.colors.successGreen};
  }
`

const TransformationDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    margin: ${({ theme }) => theme.space.md} 0;
  }
`

const TransformationDividerLine = styled.div`
  width: 2px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100px;
    height: 2px;
  }
`

const TransformationDividerIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: ${({ theme }) => theme.space.md} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 ${({ theme }) => theme.space.md};
  }
`

export default TransformationSection
