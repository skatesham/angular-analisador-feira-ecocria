import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

/**
 * Configuração Centralizada do PrimeNG v20
 * 
 * IMPORTANTE: O theme switcher (ThemeService) controla dinamicamente:
 * - Preset (Aura, Material, Lara, Nora)
 * - Primary color
 * - Surface palette
 * - Dark mode (.dark class)
 * - Ripple (apenas para Material)
 * 
 * Esta config define valores INICIAIS e opções globais.
 */
export const primengConfig = providePrimeNG({
  // ========================================
  // 1. THEMING
  // ========================================
  theme: {
    preset: Aura, // Preset inicial (ThemeService pode sobrescrever)
    options: {
      prefix: 'p',
      darkModeSelector: '.dark', // Classe aplicada pelo ThemeService
    },
  },

  // ========================================
  // 2. UX GLOBAL
  // ========================================
  ripple: true, // Ativado por padrão (ThemeService pode sobrescrever)
  inputVariant: 'filled', // Inputs com background preenchido (moderno)

  // ========================================
  // 3. OVERLAYS E Z-INDEX
  // ========================================
  overlayAppendTo: 'body', // Evita problemas com overflow/containers fixos
  zIndex: {
    modal: 1100,      // Dialogs, drawers
    overlay: 1100,    // Dropdowns, menus, selects
    menu: 1100,       // Context menus
    tooltip: 1150,    // Tooltips (acima de tudo)
  },

  // ========================================
  // 4. CSP (Content Security Policy)
  // ========================================
  csp: {
    // Em produção, o nonce deve vir do servidor
    // Por enquanto, deixamos vazio (não crítico para dev)
    nonce: undefined,
  },

  // ========================================
  // 5. TRADUÇÃO PT-BR COMPLETA
  // ========================================
  translation: {
    // Ações
    accept: 'Sim',
    reject: 'Não',
    choose: 'Escolher',
    upload: 'Enviar',
    cancel: 'Cancelar',
    clear: 'Limpar',
    apply: 'Aplicar',
    
    // Datas
    today: 'Hoje',
    am: 'AM',
    pm: 'PM',
    weekHeader: 'Sem',
    
    // Dias da semana
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    
    // Meses
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    
    // Formato de data
    dateFormat: 'dd/mm/yy',
    firstDayOfWeek: 0, // Domingo
    
    // Mensagens
    emptyMessage: 'Nenhum resultado encontrado',
    emptyFilterMessage: 'Nenhum resultado encontrado',
    emptySearchMessage: 'Nenhum resultado encontrado',
    emptySelectionMessage: 'Nenhum item selecionado',
    pending: 'Pendente',
    completed: 'Concluído',
    
    // Filtros (DataTable, etc)
    startsWith: 'Começa com',
    contains: 'Contém',
    notContains: 'Não contém',
    endsWith: 'Termina com',
    equals: 'Igual a',
    notEquals: 'Diferente de',
    noFilter: 'Sem filtro',
    lt: 'Menor que',
    lte: 'Menor ou igual a',
    gt: 'Maior que',
    gte: 'Maior ou igual a',
    is: 'É',
    isNot: 'Não é',
    before: 'Antes',
    after: 'Depois',
    dateIs: 'Data é',
    dateIsNot: 'Data não é',
    dateBefore: 'Data antes de',
    dateAfter: 'Data depois de',
    matchAll: 'Corresponder todos',
    matchAny: 'Corresponder qualquer',
    addRule: 'Adicionar regra',
    removeRule: 'Remover regra',
    
    // Seleção
    selectionMessage: '{0} itens selecionados',
    searchMessage: '{0} resultados disponíveis',
    
    // Upload
    fileChosenMessage: '{0} arquivos',
    noFileChosenMessage: 'Nenhum arquivo escolhido',
    fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    
    // Senha
    weak: 'Fraca',
    medium: 'Média',
    strong: 'Forte',
    passwordPrompt: 'Digite uma senha',
    
    // DatePicker
    chooseYear: 'Escolher ano',
    chooseMonth: 'Escolher mês',
    chooseDate: 'Escolher data',
    prevDecade: 'Década anterior',
    nextDecade: 'Próxima década',
    prevYear: 'Ano anterior',
    nextYear: 'Próximo ano',
    prevMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    prevHour: 'Hora anterior',
    nextHour: 'Próxima hora',
    prevMinute: 'Minuto anterior',
    nextMinute: 'Próximo minuto',
    prevSecond: 'Segundo anterior',
    nextSecond: 'Próximo segundo',
    
    // ARIA (Acessibilidade)
    aria: {
      trueLabel: 'Verdadeiro',
      falseLabel: 'Falso',
      nullLabel: 'Não selecionado',
      star: '1 estrela',
      stars: '{star} estrelas',
      selectAll: 'Todos os itens selecionados',
      unselectAll: 'Todos os itens desmarcados',
      close: 'Fechar',
      previous: 'Anterior',
      next: 'Próximo',
      navigation: 'Navegação',
      scrollTop: 'Rolar para o topo',
      moveTop: 'Mover para o topo',
      moveUp: 'Mover para cima',
      moveDown: 'Mover para baixo',
      moveBottom: 'Mover para o final',
      moveToTarget: 'Mover para o destino',
      moveToSource: 'Mover para a origem',
      moveAllToTarget: 'Mover tudo para o destino',
      moveAllToSource: 'Mover tudo para a origem',
      pageLabel: 'Página {page}',
      firstPageLabel: 'Primeira página',
      lastPageLabel: 'Última página',
      nextPageLabel: 'Próxima página',
      prevPageLabel: 'Página anterior',
      rowsPerPageLabel: 'Linhas por página',
      jumpToPageDropdownLabel: 'Ir para a página',
      jumpToPageInputLabel: 'Ir para a página',
      selectRow: 'Linha selecionada',
      unselectRow: 'Linha desmarcada',
      expandRow: 'Linha expandida',
      collapseRow: 'Linha recolhida',
      showFilterMenu: 'Mostrar menu de filtros',
      hideFilterMenu: 'Ocultar menu de filtros',
      filterOperator: 'Operador de filtro',
      filterConstraint: 'Restrição de filtro',
      editRow: 'Editar linha',
      saveEdit: 'Salvar edição',
      cancelEdit: 'Cancelar edição',
      listView: 'Visualização em lista',
      gridView: 'Visualização em grade',
      slide: 'Slide',
      slideNumber: '{slideNumber}',
      zoomImage: 'Ampliar imagem',
      zoomIn: 'Aumentar zoom',
      zoomOut: 'Diminuir zoom',
      rotateRight: 'Girar à direita',
      rotateLeft: 'Girar à esquerda',
    },
  },

  // ========================================
  // 6. OPÇÕES DE FILTRO (DataTable)
  // ========================================
  filterMatchModeOptions: {
    text: ['startsWith', 'contains', 'notContains', 'endsWith', 'equals', 'notEquals'],
    numeric: ['equals', 'notEquals', 'lt', 'lte', 'gt', 'gte'],
    date: ['dateIs', 'dateIsNot', 'dateBefore', 'dateAfter'],
  },

  // NOTA: PassThrough (pt) não é suportado em providePrimeNG
  // Para customizar componentes globalmente, use CSS ou aplique pt diretamente nos componentes
});
