import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gsap from 'gsap';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const changeChartTextRef = useRef(null);
  let currentActiveIndex = useRef(1).current;

  useEffect(() => {
    const chartElement = chartRef.current;
    const changeChartText = changeChartTextRef.current;

    const chartData = {
      labels: ['01', '02', '03', '04'],
      data: [25, 25, 25, 25],
      chartDataText: [
        'A dedicated marketplace for Taproot and RGB based NFTs, as well as Ordinals.',
        'Enhanced liquidity and visibility for creators and collectors.',
        'User-friendly interface for seamless trading and minting.',
        'Support of all major Bitcoin browser wallet extensions including Unisat, Leather, Xverse, Alby.',
      ],
    };
    const transparent = '#00000000';
    const gold = '#EFB325';
    const black = '#000';

    const doughnutBgColors = [
      [gold, transparent, transparent, transparent],
      [transparent, gold, transparent, transparent],
      [transparent, transparent, gold, transparent],
      [transparent, transparent, transparent, gold],
    ];
    const doughnutTextColors = [
      [black, gold, gold, gold],
      [gold, black, gold, gold],
      [gold, gold, black, gold],
      [gold, gold, gold, black],
    ];

    const calculateAngle = (newIndex, oldIndex) => {
      let diff = oldIndex - newIndex;
      let a = diff * 90;
      if (a > 180) {
        a -= 360;
      } else if (a < -180) {
        a += 360;
      }
      return a;
    };

    const chart = new Chart(chartElement, {
      type: 'doughnut',
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
          datalabels: {
            color: [black, gold, gold, gold],
            font: {
              size: 12,
              family: 'SF UI Display',
            },
            anchor: 'center',
            align: 'end',
            rotation: [0, 90, 180, -90],
            offset: 0,
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex];
            },
          },
        },
      },
      data: {
        labels: chartData.labels,
        datasets: [
          {
            data: chartData.data,
            rotation: -45,
            backgroundColor: [gold, transparent, transparent, transparent],
            hoverBorderColor: '#EFB325',
            cutout: '85%',
            spacing: 20,
            borderColor: '#F8F8F810',
            datalabels: {
              anchor: 'center',
            },
          },
        ],
      },
    });

    const getInex = (click) => {
      const clickedIndex = chart.getElementsAtEventForMode(
        click,
        'nearest',
        { intersect: true },
        true
      );

      if (clickedIndex[0]?.index === 0 || clickedIndex[0]?.index) {
        changeChartText.textContent =
          chartData['chartDataText']?.[clickedIndex[0]?.index];
      }

      if (clickedIndex.length) {
        const index = clickedIndex[0]['index'];
        const dataset = chart.data.datasets[0];
        chart.options.plugins.datalabels.color = doughnutTextColors[index];
        dataset.backgroundColor = doughnutBgColors[index];
        chart.update();
        const currentRotation =
          parseFloat(
            chartElement.style.transform
              .replace('rotate(', '')
              .replace('deg)', '')
          ) || 0;
        const newRotation =
          currentRotation + calculateAngle(index + 1, currentActiveIndex);
        currentActiveIndex = index + 1;
        gsap.to('.arrow__doughnut', {
          opacity: 0,
          duration: 0,
        });
        gsap.to(chartElement, {
          rotation: newRotation,
          duration: 0.5,
          ease: 'easeIn',
        });
        gsap.to('.arrow__doughnut', {
          opacity: 100,
          delay: 0.3,
          duration: 0,
        });
      }
    };

    // Add event listener for chart clicks
    chartElement.addEventListener('click', getInex);

    // Cleanup on unmount
    return () => {
      chartElement.removeEventListener('click', getInex);
      chart.destroy();
    };
  }, []);

  return (
    <div className='flex h-[100%] w-[100%] flex-col items-center py-[10vw] md:w-[35%] md:justify-start md:py-0'>
      <h3 className='-mt-2 font-teko text-[48px] font-medium text-white md:m-0 md:self-start md:text-[5.10vw] md:leading-[4.59vw] xl:mt-0'>
        Revolutionizing NFTs
      </h3>
      <div className='-mt-3.5 mb-6 md:hidden xl:hidden'>
        <p className='font-teko text-[32px] text-gold md:text-[3.304vw] xl:text-[2.604vw] xl:leading-[2.34vw]'>
          DeFi.Gold NFT Marketplace
        </p>
      </div>

      <div className='relative mt-[2.60vw] h-[300px] w-[300px] rounded-full md:h-[27.3vw] md:w-[27.3vw]'>
        <div className='div div absolute -z-10 h-full w-full rounded-full'>
          <div className='relative flex h-full w-full items-center justify-center'>
            <p
              ref={changeChartTextRef}
              className='changeChartText font-sfui text-lg leading-[24px] w-[74%] text-center text-white md:w-[53%] md:text-2xl'
            >
              A dedicated marketplace for Taproot and RGB based NFTs, as well as
              Ordinals.
            </p>
            <div className='arrow__doughnut absolute top-[7%]'>
              <svg
                width='15'
                height='10'
                viewBox='0 0 15 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0L15 6.55671e-07L7.5 10L0 0Z' fill='#EFB325' />
              </svg>
            </div>
          </div>
        </div>
        <canvas className='chart' ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default DoughnutChart;
